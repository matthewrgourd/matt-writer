import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { substackPosts } from '@/data/substackPosts';

const formatPostDate = (dateString: string | null) => {
  if (!dateString) {
    return 'Date unavailable';
  }

  const date = new Date(dateString);

  return date.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/London',
  });
};

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Latest posts, with reflections on technical writing, developer experience, documentation strategy, and related technology topics. Opinions are my own.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {substackPosts.map((post) => (
            <Card key={post.postId} className="h-full border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{formatPostDate(post.publishedAt)}</CardDescription>
              </CardHeader>
              <CardContent>
                {post.subtitle && (
                  <p className="text-sm text-slate-700 font-medium mb-2">{post.subtitle}</p>
                )}
                {post.excerpt.split('\n\n').map((paragraph, index) => (
                  <p
                    key={`${post.postId}-${index}`}
                    className={`text-sm text-slate-600 ${index > 0 ? 'mt-3' : ''}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </CardContent>
              <CardFooter>
                <a
                  href={post.canonicalUrl}
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read post
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
