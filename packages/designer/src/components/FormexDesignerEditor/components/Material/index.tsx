import i18next from 'i18next';import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Segmented } from "antd";
import { useState } from "react";
import MaterialList from "./MaterialList";
import classNames from "classnames";
import MaterialTree from "./MaterialTree";

export default function Material() {
  const [activeKey, setActionKey] = useState<"list" | "tree">("list");
  return (
    <div className="p-4 flex flex-col gap-4 h-full">
      <Segmented
        value={activeKey}
        options={[
        { label: i18next.t('intl1'), value: "list", icon: <BarsOutlined /> },
        { label: i18next.t('intl2'), value: "tree", icon: <AppstoreOutlined /> }]
        }
        onChange={setActionKey}
        block />

      <div
        className={classNames({
          hidden: activeKey === "tree"
        })}>

        <MaterialList />
      </div>
      <div
        className={classNames({
          hidden: activeKey !== "tree"
        })}>

        <MaterialTree />
      </div>
    </div>);

}