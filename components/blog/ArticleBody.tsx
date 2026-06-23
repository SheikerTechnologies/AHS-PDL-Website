'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ArticleBodyProps {
  content: string;
}

export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="prose prose-base max-w-none
      prose-headings:font-bold prose-headings:text-text-main prose-headings:tracking-tight
      prose-p:text-text-secondary prose-p:leading-relaxed
      prose-a:text-accent prose-a:no-underline hover:prose-a:underline
      prose-strong:text-text-main
      prose-code:text-accent prose-code:bg-surface-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
      prose-pre:bg-surface-muted prose-pre:border prose-pre:border-border-light prose-pre:rounded-2xl
      prose-li:text-text-secondary
      prose-blockquote:border-l-accent prose-blockquote:text-text-secondary prose-blockquote:not-italic
      prose-img:rounded-2xl prose-img:shadow-md
      prose-table:text-text-secondary prose-th:text-text-main prose-th:border prose-th:border-border-light prose-td:border prose-td:border-border-light
      prose-hr:border-border-light
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
