import React, { useEffect } from 'react'
import { useProjectsGetter } from '../projects/blog';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const Home = () => {
    const { fetchContent, projects } = useProjectsGetter();

    useEffect(() => {
        fetchContent();
    }, [fetchContent]);

    console.log("repo", projects);
    const allowedElements = [
        'br', 'details', 'summary', 'a', 'img',
        'p', 'strong', 'em', 'ul', 'ol', 'li', 'code', 'pre', 'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
    ];
    const markdown = Array.isArray(projects) ? projects.join('\n\n') : (projects || '');

    return <div>
        Home
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            allowedElements={allowedElements}
        >
            { markdown }
        </Markdown>
    </div>;
}

export default Home