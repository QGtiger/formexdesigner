import i18next from 'i18next';import {
  BankOutlined,
  createFromIconfontCN,
  FormOutlined,
  NumberOutlined,
  SelectOutlined,
  CloudUploadOutlined,
  UploadOutlined } from
"@ant-design/icons";
import { Input, InputNumber } from "antd";
import { create } from "zustand";
import { FormItemHoc, FormItemLabelHoc, MaterialWrapperHoc } from "./utils";
import Title from "./materials/title";
import SubTitle from "./materials/subtitle";
import Submit from "./materials/submit";
import Banner from "./materials/banner";
import MutliSelect from "./materials/multiSelect";
import CustomSelect from "./materials/select";
import { defaultInputSetter } from "./utils/constant";
import CustomForm from "./materials/form";
import CustomDatePicker from "./materials/datepicker";
import DraggerUpload from "./materials/DraggerUpload";

interface MaterialState {
  materialList: MaterialItem[];
  materialMap: Record<MaterialItem["code"], MaterialItem>;
  materialKeys: MaterialItem["code"][];

  getMaterialItemByCode: (code: MaterialItem["code"]) => MaterialItem;
}

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_4921468_i9tqszect6l.js"
});

function getDefaultProps(opts: {name?: string;}) {
  return {
    placeholder: i18next.t('intl3'),
    name: opts.name || i18next.t('intl4')
  };
}

export const useMaterialStore = create<MaterialState>(() => {
  const MaterialInput = FormItemHoc(FormItemLabelHoc(Input));
  const MaterialInputNumber = FormItemHoc(
    FormItemLabelHoc((props: any) => {
      return <InputNumber {...props} style={{ width: "100%" }} />;
    })
  );
  const MaterialSelect = FormItemHoc(FormItemLabelHoc(CustomSelect));
  const MaterialMultiSelect = FormItemHoc(FormItemLabelHoc(MutliSelect));
  const MaterialDatePicker = FormItemHoc(FormItemLabelHoc(CustomDatePicker));
  const MaterialDraggerUpload = FormItemHoc(FormItemLabelHoc(DraggerUpload));

  const materialList: MaterialItem[] = [
  {
    code: "form",
    name: i18next.t('intl5'),
    desc: i18next.t('intl6'),
    icon: <FormOutlined />,
    hidden: true,
    defaultProps: {
      primaryColor: "#0958d9"
    },
    configSetter: [
    {
      type: "colorpicker",
      name: "primaryColor",
      label: i18next.t('intl7')
    }],

    dev: MaterialWrapperHoc(CustomForm),
    prod: CustomForm
  },
  {
    code: "banner",
    name: "Banner",
    desc: i18next.t('intl8'),
    icon: <BankOutlined />,
    hidden: true,
    defaultProps: {
      background:
      "https://winrobot-pub-a-1302949341.cos.ap-shanghai.myqcloud.com/image/20250514202954/395c74ad8b4de6e1b7a38247700842aa.png"
    },
    dev: MaterialWrapperHoc(Banner),
    prod: Banner,
    configSetter: [
    {
      type: "bgselector",
      name: "background",
      label: i18next.t('intl9')
    }]

  },
  {
    code: "title",
    name: i18next.t('intl10'),
    desc: i18next.t('intl11'),
    icon: <IconFont type="icon-login_title" />,
    hidden: true,
    defaultProps: {
      text: i18next.t('intl11')
    },
    configSetter: [
    {
      type: "input",
      name: "text",
      label: i18next.t('intl12')
    }],

    dev: MaterialWrapperHoc(Title),
    prod: Title
  },
  {
    code: "subtitle",
    name: i18next.t('intl13'),
    desc: i18next.t('intl13'),
    icon: <IconFont type="icon-subtitle" />,
    hidden: true,
    defaultProps: {
      text: i18next.t('intl13')
    },
    configSetter: [
    {
      type: "ricktext",
      name: "text",
      label: i18next.t('intl13')
    }],

    dev: MaterialWrapperHoc(SubTitle),
    prod: SubTitle
  },
  {
    code: "submit",
    name: i18next.t('intl14'),
    desc: i18next.t('intl15'),
    icon: <CloudUploadOutlined />,
    hidden: true,
    defaultProps: {
      text: i18next.t('intl16')
    },
    configSetter: [
    {
      type: "input",
      name: "text",
      label: i18next.t('intl17')
    },
    {
      type: "colorpicker",
      name: "textColor",
      label: i18next.t('intl18')
    }],

    dev: MaterialWrapperHoc(Submit),
    prod: Submit
  },
  {
    code: "input",
    name: i18next.t('intl19'),
    desc: i18next.t('intl20'),
    icon: <IconFont type="icon-biaodanzujian-shurukuang" />,
    defaultProps: getDefaultProps({
      name: i18next.t('intl19')
    }),
    configSetter: [
    ...defaultInputSetter,
    {
      type: "input",
      name: "defaultValue",
      label: i18next.t('intl21')
    }],

    dev: MaterialWrapperHoc(MaterialInput),
    prod: MaterialInput
  },
  {
    code: "inputNumber",
    name: i18next.t('intl22'),
    desc: i18next.t('intl23'),
    icon: <NumberOutlined />,
    dev: MaterialWrapperHoc(MaterialInputNumber),
    prod: MaterialInputNumber,
    defaultProps: getDefaultProps({
      name: i18next.t('intl22')
    }),
    configSetter: [
    ...defaultInputSetter,
    {
      type: "inputnumber",
      name: "defaultValue",
      label: i18next.t('intl24')
    }]

  },
  {
    code: "select",
    name: i18next.t('intl25'),
    desc: i18next.t('intl26'),
    icon: <SelectOutlined />,
    dev: MaterialWrapperHoc(MaterialSelect),
    prod: MaterialSelect,
    defaultProps: getDefaultProps({
      name: i18next.t('intl25')
    }),
    configSetter: [
    ...defaultInputSetter,
    {
      type: "optionseditor",
      name: "options",
      label: i18next.t('intl27')
    },
    {
      type: "input",
      name: "defaultValue",
      label: i18next.t('intl24')
    }]

  },
  {
    code: "multiSelect",
    name: i18next.t('intl28'),
    desc: i18next.t('intl29'),
    icon: <IconFont type="icon-duoxuanxiala" />,
    defaultProps: getDefaultProps({
      name: i18next.t('intl28')
    }),
    dev: MaterialWrapperHoc(MaterialMultiSelect),
    prod: MaterialMultiSelect,
    configSetter: [
    ...defaultInputSetter,
    {
      type: "optionseditor",
      name: "options",
      label: i18next.t('intl27')
    }]

  },
  {
    code: "upload",
    name: i18next.t('intl30'),
    desc: i18next.t('intl31'),
    icon: <UploadOutlined />,
    dev: MaterialWrapperHoc(MaterialDraggerUpload),
    prod: MaterialDraggerUpload,
    defaultProps: getDefaultProps({
      name: i18next.t('intl30')
    }),
    configSetter: [
    {
      type: "input",
      name: "name",
      label: i18next.t('intl12')
    }]

  },
  {
    code: "datePicker",
    name: i18next.t('intl32'),
    desc: i18next.t('intl33'),
    icon: <IconFont type="icon-riqixuanze" />,
    defaultProps: getDefaultProps({
      name: i18next.t('intl32')
    }),
    dev: MaterialWrapperHoc(MaterialDatePicker),
    prod: MaterialDatePicker,
    configSetter: [
    ...defaultInputSetter,
    {
      type: "datepickerformatselelctor",
      name: "format",
      label: i18next.t('intl34')
    }]

  }];


  const materialMap = materialList.reduce((acc, curr) => {
    acc[curr.code] = curr;
    return acc;
  }, {} as MaterialState["materialMap"]);
  return {
    materialList,
    materialMap,
    materialKeys: materialList.map((item) => item.code),

    getMaterialItemByCode: (code) => {
      return materialMap[code];
    }
  };
});

export function useMaterialList() {
  const { materialList } = useMaterialStore();
  return materialList;
}

export function useMaterialMap() {
  const { materialMap } = useMaterialStore();
  return materialMap;
}