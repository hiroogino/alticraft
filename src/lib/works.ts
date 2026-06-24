import { client, type Work } from "@/lib/microcms"

const PER_PAGE = 4

export async function getWorksPage(page: number) {
  const data = await client.getList<Work>({
    endpoint: "works",
    queries: {
      limit: PER_PAGE,
      offset: (page - 1) * PER_PAGE,
    },
  })

  const totalPages = Math.ceil(data.totalCount / PER_PAGE)

  return {
    contents: data.contents,
    totalPages,
    currentPage: page,
  }
}

export async function getWorkDetail(id: string) {
  const work = await client.getListDetail<Work>({
    endpoint: "works",
    contentId: id,
  })
  return work
}