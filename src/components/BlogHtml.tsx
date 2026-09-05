type Props = {
  html: string;
};

export function BlogHtml({ html }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
