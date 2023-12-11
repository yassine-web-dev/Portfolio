"use client";

import React, { ChangeEvent, useEffect, useState } from 'react'
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


import Pagination from '../../components/Pagination';
import Paginate from '../../components/Paginate';
import Sorting from '../../components/Sorting';

interface Repos {
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    private: boolean
    owner: {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean,
    },
    html_url: string,
    description: string,
    fork: boolean,
    url: string,
    forks_url: string,
    keys_url: string,
    collaborators_url: string,
    teams_url: string,
    hooks_url: string,
    issue_events_url: string,
    events_url: string,
    assignees_url: string,
    branches_url: string,
    tags_url: string,
    blobs_url: string,
    git_tags_url: string,
    git_refs_url: string,
    trees_url: string,
    statuses_url: string,
    languages_url: string,
    stargazers_url: string,
    contributors_url: string,
    subscribers_url: string,
    subscription_url: string,
    commits_url: string,
    git_commits_url: string,
    comments_url: string
    issue_comment_url: string,
    contents_url: string,
    compare_url: string,
    merges_url: string,
    archive_url: string,
    downloads_url: string,
    issues_url: string,
    pulls_url: string,
    milestones_url: string,
    notifications_url: string,
    labels_url: string,
    releases_url: string,
    deployments_url: string,
    created_at: string,
    updated_at: string,
    pushed_at: string,
    git_url: string,
    ssh_url: string,
    clone_url: string,
    svn_url: string,
    homepage: null,
    size: number,
    stargazers_count: number
    watchers_count: number,
    language: string,
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean
    has_discussions: boolean,
    forks_count: boolean,
    mirror_url:	null,
    archived: boolean,
    disabled: boolean,
    open_issues_count: boolean,
    license: null,
    allow_forking: boolean,
    is_template: boolean,
    web_commit_signoff_required: boolean,
    topics: any[],
    visibility: string,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string,
}

export default function Searchbar({ repos } : { repos: Repos[] }) {
    
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const [sorting, setSorting] = useState('Sort')
    const [sortedRepos, setSortedRepos] = useState(repos)

    //Our search filter function
    const searchFilter = (array: Repos[]) => {
        return array.filter(
            (el) => el.name.toLowerCase().includes(query)
        )
    }

    //Applying our search filter function to our array of countries recieved from the API
    const filteredRepos = searchFilter(repos)

    //Handling the input on our search bar
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value.toLowerCase())
    }

    // implementing sort
    const handleValChange = (e: React.ChangeEvent<HTMLDivElement>) => {
        const selectValAsc = e.target.classList.contains("A-Z")
        const selectValDsc = e.target.classList.contains("Z-A")
        
        if (selectValAsc) {
            setSorting('A-Z')
        } else if (selectValDsc) {
            setSorting('Z-A')
        }
        
        let tempArr = [...repos]
        if (selectValAsc) {
            tempArr = tempArr.sort((repo1, repo2) => repo1.name.localeCompare(repo2.name));
        } else if (selectValDsc) {
            tempArr = tempArr.sort((repo1, repo2) => repo2.name.localeCompare(repo1.name));
        }
        setSortedRepos(tempArr)
    }

    // implementing pagination
    const paginatedRepos = Paginate(sortedRepos, currentPage, pageSize);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    // remove paginated or filtered repos bcs of the big space that scrollArea leaves
    useEffect(() => {
        const chosen = document.querySelector(".chosen");

        if (filteredRepos.length == 0 && repos.length != 0) {
            chosen?.classList.add("hidden")
        } else if (repos.length == 0) {
            chosen?.classList.add("hidden")
        }
        
        return () => {
            chosen?.classList.remove("hidden")
        }
    }, [filteredRepos, repos.length])

    return (
        <main>
            <div className="flex justify-end mt-20 mb-[30px] gap-4">
                <div className="flex border-b-[1px] w-96 pl-2">
                    <Search className="mr-2 mt-[4px] h-4 w-4 shrink-0 opacity-50" />
                    <input type="search" placeholder='search' className='w-full pb-2 text-base outline-none bg-transparent dark:bg-black' onChange={handleChange} />
                </div>
                <Sorting
                    onValue={sorting}
                    onChange={handleValChange}
                 />
            </div>
            <div className="chosen flex justify-center">
                <ScrollArea className="h-[440px] p-4">
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-7">
                        {
                            query == '' && repos.length != 0 && paginatedRepos.map(repo => (
                                <Card key={repo.id} className="w-96 shadow-sm hover:shadow-md transition-shadow dark:bg-black dark:shadow-none dark:hover:shadow-none">
                                    <CardHeader>
                                        <CardTitle>
                                            { repo.name }
                                        </CardTitle >
                                        <CardDescription>
                                            { repo.description }
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <a href={`https://yassine-web-dev.github.io/${repo.name}/`} target={`_blank`}>
                                            <Button className="!bg-[#eee] hover:!bg-[#DADADA] dark:!bg-[#ddd] text-base dark:hover:!bg-[#aaa] dark:text-black" variant={`outline`}>
                                                visit
                                            </Button>
                                        </a>
                                    </CardFooter>
                                </Card>
                            ))  
                        }
                        {
                            query != '' && filteredRepos.map(repo => (
                                <Card key={repo.id} className="w-96 shadow-sm hover:shadow-md dark:bg-black dark:shadow-none dark:hover:shadow-none">
                                    <CardHeader>
                                        <CardTitle>
                                            { repo.name }
                                        </CardTitle >
                                        <CardDescription>
                                            { repo.description }
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <a href={`https://yassine-web-dev.github.io/${repo.name}/`} target={`_blank`}>
                                            <Button className="!bg-[#eee] hover:!bg-[#DADADA] dark:!bg-[#ddd] text-base dark:hover:!bg-[#aaa] dark:text-black" variant={`outline`}>
                                                visit
                                            </Button>
                                        </a>
                                    </CardFooter>
                                </Card>
                            ))  
                        }
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            
            {
                query == '' && repos.length != 0 && <Pagination
                    items={repos.length}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onPageChange={onPageChange}
                 />
            }

            {
                filteredRepos.length == 0 && repos.length != 0 && (
                    <div className="flex justify-center ml-32 mt-40 mb-52">
                        <Alert className="dark:bg-black flex justify-center w-96 mr-36">
                            <AlertDescription>
                                <p>No results found.</p>
                            </AlertDescription>
                        </Alert>
                    </div>
                )
            }
            {
                repos.length == 0 && (
                    <div className="flex justify-center ml-32 mt-40 mb-52">
                        <Alert className="dark:bg-black flex justify-center w-96 mr-36">
                            <AlertDescription>
                                <p>There are no projects currently!</p>
                            </AlertDescription>
                        </Alert>
                    </div>
                )
            }
        </main>
    )
}