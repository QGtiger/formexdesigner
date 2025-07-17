import i18next from 'i18next';export const defaultInputSetter: Setter[] = [
{
  type: "input",
  name: "name",
  label: i18next.t('intl12')
},
{
  type: "input",
  name: "placeholder",
  label: i18next.t('intl39')
},
{
  type: "switch",
  name: "required",
  label: i18next.t('intl40')
}];