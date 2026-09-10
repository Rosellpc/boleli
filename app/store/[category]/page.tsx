interface CategoryProps {
    params: Promise <{
        category: string
    }>
}
export default async function CategoryPage({params}: CategoryProps) {
    const { category } = await params
    return(
        <p>Fancy style: {category}</p>
    )
}