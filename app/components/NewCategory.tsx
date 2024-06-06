import React from 'react'

const NewCategory = async ( {lang,url} : any ) => {
    // Call API gọi data Menu
    const menuUrl = await fetch(`${process.env.URL_BE}categories?_fields=id,name,slug,count&lang=${lang}&orderby=id`, { next: { revalidate: 3600 } });
    if (!menuUrl.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await menuUrl.json();
  return (
    <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-500">
        <ul className="space-y-2">
        {data?.map((category:any) => (
            <li key={category.id}>
                <a href={category.slug === "tin-tuc" || category.slug === 'news' ? `/${lang}/${category.slug}` : `/${lang}/${url}/${category.slug}`}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-400">
                    <span className="flex-1 ml-3 whitespace-nowrap">{category.name}</span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                        {category.count}
                    </span>
                </a>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default NewCategory