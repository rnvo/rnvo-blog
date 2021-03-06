import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getSortedAlgoPostData } from "../../lib/pages";
import BlogDate from "../../components/date";

export default function AlgorithmPage({
	allAlgoPostsData,
}: {
	allAlgoPostsData: {
		date: string;
		title: string;
		slug: string;
	}[];
}): JSX.Element {
	return (
		<div className="category-container">
			{allAlgoPostsData &&
				allAlgoPostsData.map(({ date, title, slug }) => (
					<article key={slug}>
						<h3>
							<Link
								href={`/algorithm/${encodeURIComponent(slug)}`}
							>
								<a className="transition hover:text-indigo-500">
									{title}
								</a>
							</Link>
						</h3>
						<div>
							<span className="text-sm">
								<BlogDate dateString={date} />
							</span>
						</div>
					</article>
				))}
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const allAlgoPostsData = getSortedAlgoPostData();
	return {
		props: {
			allAlgoPostsData,
		},
	};
};
