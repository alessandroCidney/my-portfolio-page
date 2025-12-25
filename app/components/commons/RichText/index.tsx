import {ReactNode} from 'react'
 
type Tag = 'line-break' | 'bold-text'
 
type Props = {
  children(tags: Record<Tag, (chunks?: ReactNode) => ReactNode>): ReactNode
}
 
export default function RichText({ children }: Props) {
  return (
    <div>
      {
        children({
          'line-break': () => <><br /><br /></>,
          'bold-text': (chunks) => <span className='font-bold'>{ chunks }</span>,
        })
      }
    </div>
  )
}