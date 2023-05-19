import React from "react";
import ModuleDetailDescription from "~/components/elements/detail/modules/ModuleDetailDescription";
import ModuleAdditionInformation from "~/components/elements/detail/modules/ModuleDetailAdditionInformation";
import ModuleDetailSpecification from "~/components/elements/detail/modules/ModuleDetailSpecification";
import ModuleDetailReviews from "~/components/elements/detail/modules/ModuleDetailReviews";
import { Tabs } from "antd";

const { TabPane } = Tabs;
const ModuleDetailTabs = ({product}) => {
    return (
        <Tabs defaultActiveKey="1" className="ps-product__tabs">
            <TabPane tab="Description" key="1">
                <ModuleDetailDescription product={product}/>
            </TabPane>
        </Tabs>
    );
};

export default ModuleDetailTabs;
