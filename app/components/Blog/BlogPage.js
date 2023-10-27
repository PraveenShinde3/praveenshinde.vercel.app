import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import { BsArrowBarLeft } from "react-icons/bs";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import formatDate from "../../utils/Blog/dateFormatter";
import Link from "next/link";
import Image from "next/image";
import { BsCalendar3 } from "react-icons/bs";
import "../../style/syntax-highlight.css";

const BlogPage = ({ source, data }) => {
  const options = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
    },
  };
  return (
    <div className="prose prose-dark">
      <Link href="/blog" className=" no-underline">
        <p className="flex gap-2 pb-4 items-center">
          <BsArrowBarLeft /> Back
        </p>
      </Link>

      <div>
        <p className="text-foreground text-2xl font-bold">{data.title}</p>
        <p className="text-[0.8rem] -mt-4 border-b-2 pb-2 border-muted font-bold flex gap-2 items-center">
          <BsCalendar3 />
          {formatDate(data.createdAt)}
        </p>
        <Image
          src={data.image.url}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="border-2 border-muted rounded-xl"
        />
      </div>
      <MDXRemote source={source} options={options} />
    </div>
  );
};

export default BlogPage;
