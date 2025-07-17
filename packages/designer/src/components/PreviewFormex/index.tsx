import { FormexModel, FormexModelProps } from "@/stores/FormexModel";
import { useMaterialMap } from "@/stores/useMaterialStore";
import classNames from "classnames";
import React, { useRef } from "react";
import { defaultSchema } from "@/stores/useSchemaStore";

export default function PreviewFormex(
  props: {
    schema?: FormexSchema;
  } & FormexModelProps
) {
  const materialMap = useMaterialMap();
  const { formItems } = props.schema || defaultSchema;

  const formexDomRef = useRef<HTMLDivElement>(null);

  function renderComponents(components?: FormexItem[]): React.ReactNode {
    if (!components) return null;
    return components.map((it) => {
      const { code, props, id } = it;
      const martialItem = materialMap[code];
      if (!martialItem) return;
      const { prod: T } = martialItem;

      return React.createElement(
        T,
        {
          key: id,
          id,
          code,
          ...martialItem.defaultProps,
          ...props,
        },
        renderComponents(it.children)
      );
    });
  }

  // md:bg-gradient-to-b md:from-indigo-200 md:via-cyan-50 md:to-white

  return (
    <FormexModel.Provider value={props}>
      <div className="edit-area relative w-full min-h-full bg-white   rounded-xl">
        <div className={classNames("")} ref={formexDomRef}>
          {renderComponents(formItems)}
        </div>
      </div>
    </FormexModel.Provider>
  );
}
