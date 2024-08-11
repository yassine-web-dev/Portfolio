"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronsUpDown, Plus, Terminal, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

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

export function CollapsibleDemo({ repos }: {repos: Repos[]}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="">
          projects i&#39;m working on
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="hover:bg-gray-300 dark:hover:bg-slate-900 w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      {
        repos.length != 0 && repos.sort((repo1, repo2) => repo2.pushed_at.localeCompare(repo1.pushed_at)).slice(1, 2).map(repo => (
            <div key={repo.id} className="flex justify-between rounded-md border border-slate-900 px-4 py-3 font-mono text-sm">
                {repo.name}
                {
                  repo.name != "portfolio" && repo.name != "my-portfolio" && repo.name != "youcan-clone" && <Link href={`https://yassine-web-dev.github.io/${repo.name}`} target="_blank">
                    <Badge className="">visit</Badge>
                  </Link>
                }
                {
                  repo.name == "portfolio" && <Link href={`https://portfolio-mu-one-71.vercel.app/`} target="_blank">
                    <Badge className="">visit</Badge>
                  </Link>
                }
                {
                  repo.name == "my-portfolio" && <Link href={`https://my-portfolio-dn3k.vercel.app/`} target="_blank">
                    <Badge className="">visit</Badge>
                  </Link>
                }
                {
                  repo.name == "youcan-clone" && <Link href={`/`} target="_blank">
                    <Badge className="">visit</Badge>
                  </Link>
                }
            </div>
        ))
      }
      {
        repos.length != 0 && repos.sort((repo1, repo2) => repo2.pushed_at.localeCompare(repo1.pushed_at)).slice(2, repos.length-1).map(repo => (
            <>
            <CollapsibleContent className="space-y-2">
                <div key={repo.id} className="flex justify-between rounded-md border border-slate-900 px-4 py-3 font-mono text-sm">
                    {repo.name}
                    {
                      repo.name != "portfolio" && repo.name != "my-portfolio" && repo.name != "youcan-clone" && <Link href={`https://yassine-web-dev.github.io/${repo.name}`} target="_blank">
                        <Badge className="">visit</Badge>
                      </Link>
                    }
                    {
                      repo.name == "portfolio" && <Link href={`https://portfolio-mu-one-71.vercel.app/`} target="_blank">
                        <Badge className="">visit</Badge>
                      </Link>
                    }
                    {
                      repo.name == "my-portfolio" && <Link href={`https://my-portfolio-dn3k.vercel.app/`} target="_blank">
                        <Badge className="">visit</Badge>
                      </Link>
                    }
                    {
                      repo.name == "youcan-clone" && <Link href={`/`} target="_blank">
                        <Badge className="">visit</Badge>
                      </Link>
                    }
                </div>
            </CollapsibleContent>
            </>
        ))
      }
      {
        repos.length == 0 && <Alert className="bg-gray-300 dark:bg-slate-900 text-center">
            {/* <Terminal className="h-4 w-4" /> */}
            {/* <AlertTitle>Heads up!</AlertTitle> */}
            <AlertDescription>
                There are no projects currently.
            </AlertDescription>
        </Alert>
      }
      
    </Collapsible>
  )
}