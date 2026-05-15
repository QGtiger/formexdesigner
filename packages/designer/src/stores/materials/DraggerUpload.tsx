import i18next from "i18next";
import type { UploadProps } from "antd";
import { Typography, Upload } from "antd";
import { useEffect, useRef, useState } from "react";
import { FormexModel } from "../FormexModel";

const { Dragger } = Upload;

interface CustomUploadFile {
  uid: string;
  name: string;
  url: string;
  type: string;
  size: number;
  status: "done" | "error" | "uploading";
}

export default function DraggerUpload(props: {
  onChange?: (url: CustomUploadFile[]) => void;
  value: CustomUploadFile[];
}) {
  const { onChange, value } = props;
  const [fileList, setFileList] = useState<CustomUploadFile[]>(value || []);
  const isFirstRender = useRef(true);
  const { showErrorMessage, handleImageUpload } = FormexModel.useModel();

  const uploadProps: UploadProps = {
    name: "file",
    multiple: true,
    beforeUpload(file) {
      // 单个最多五个，最大20M
      if (file.size > 20 * 1024 * 1024) {
        showErrorMessage?.(i18next.t("intl46"));
        return false;
      }
      setFileList((prev) => {
        return [
          ...prev,
          {
            uid: file.uid,
            name: file.name,
            url: "",
            type: file.type,
            size: file.size,
            status: "uploading",
          },
        ];
      });

      handleImageUpload(file, (url) => {
        if (url) {
          console.log(i18next.t("intl47", { arg0: file.name }));
        } else {
          console.error(i18next.t("intl48", { arg0: file.name }));
        }
        setFileList((prev) => {
          return prev.map((item) => {
            if (item.uid === file.uid) {
              return {
                ...item,
                status: url ? "done" : "error",
                url: url || "",
              };
            }
            return item;
          });
        });
      });
      return false;
    },
    onChange({ fileList }) {
      setFileList((prev) => {
        return prev.reduce((acc, cur) => {
          if (fileList.find((it) => it.uid === cur.uid)) {
            acc.push(cur);
          }
          return acc;
        }, [] as CustomUploadFile[]);
      });
    },
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const successFiles = fileList.filter((file) => file.status === "done");
    onChange?.(successFiles);
  }, [fileList]);

  return (
    <Dragger {...uploadProps} fileList={fileList}>
      <div className=" py-2">
        <Typography.Text>{i18next.t("intl49")}</Typography.Text>
      </div>
      <div>
        <Typography.Text type="secondary">
          {i18next.t("intl50")}
        </Typography.Text>
      </div>
    </Dragger>
  );
}
