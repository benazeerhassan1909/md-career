'use client'

import { TabBlock as TabBlockComponent, TabBlockData } from "@multidots/sanity-plugin-tab-block"
import { PortableText } from 'next-sanity'

type TabProps = {
    tab: TabBlockData
}

const Tab = ({ tab }: TabProps) => {
    return (
        <TabBlockComponent
            tab={tab}
            PortableText={(props: any) => <PortableText {...props} />}
        />
    )
}

export default Tab