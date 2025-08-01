
import SearchInput from './SearchInput'
import TagItemMini from './TagItemMini'
import Card from './Card'
import SmartLink from '@/components/SmartLink'
import { useEffect, useRef } from 'react'
import { useGlobal } from '@/lib/global'

/**
 * 搜索页面的导航条
 * @param {*} props
 * @returns
 */
export default function SearchNave(props) {
  const cRef = useRef(null)
  const { locale } = useGlobal()
  const { tagOptions, categoryOptions } = props

  useEffect(() => {
    setTimeout(() => {
      // 自动聚焦到搜索框
      cRef?.current?.focus()
    }, 100)
  })
  return <>
        <div className="my-6 px-2 mt-12 w-full">
            <SearchInput cRef={cRef} {...props} />
            {/* 分类 */}
            <Card className="w-full mt-4">
                <div className="dark:text-gray-200 mb-5 mx-3">
                    <i className="mr-4 fas fa-th" />
                    {locale.COMMON.CATEGORY}:
                </div>
                <div id="category-list" className="duration-200 flex flex-wrap mx-8">
                    {categoryOptions?.map(category => {
                      return (
                            <SmartLink key={category.name} href={`/category/${category.name}`} passHref legacyBehavior>
                                <div className={' duration-300 dark:hover:text-white rounded-lg px-5 cursor-pointer py-2 hover:bg-indigo-400 hover:text-white'}>
                                    <i className="mr-4 fas fa-folder" /> {category.name}({category.count})
                                </div>
                            </SmartLink>
                      )
                    })}
                </div>
            </Card>
            {/* 标签 */}
            <Card className="w-full mt-4">
                <div className="dark:text-gray-200 mb-5 ml-4">
                    <i className="mr-4 fas fa-tag" /> {locale.COMMON.TAGS}:
                </div>
                <div id="tags-list" className="duration-200 flex flex-wrap ml-8">
                    {tagOptions?.map(tag => {
                      return (
                            <div key={tag.name} className="p-2">
                                <TagItemMini key={tag.name} tag={tag} />
                            </div>
                      )
                    })}
                </div>
            </Card>
        </div>
    </>
}
