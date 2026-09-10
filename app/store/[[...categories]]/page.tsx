import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime"

interface CategoryProps {
    params: Promise <{
        categories?: string[],
        searchParams?: string
    }>
}
export default async function CategoryPage({params}: CategoryProps) {
    const { categories } = await params
     console.log(categories)
    const categoryPath = categories?.join("/") ?? "todos"
    return(
        <p>Fancy style: {categoryPath}</p>
    )
}