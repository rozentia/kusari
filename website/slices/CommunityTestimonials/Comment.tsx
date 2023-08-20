import Image from "@/components/Image";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type CommentProps = {
    comment: Content.TestimonialDocument<string> | undefined
};

const Comment = ({ comment }: CommentProps) => comment 
? (
    <div className="flex flex-col bg-n-8 border border-n-1/5 rounded-2xl">
        <div className="quote flex-1 px-5 py-10 md:px-10">
            <PrismicRichText field={comment.data.quote} components={{
                paragraph: ({children}) => (<p className="quote">{children}</p>)
            }} />
        </div>
        <div className="flex items-center px-5 py-6 bg-n-7 rounded-b-[0.9375rem] md:px-10">
            <div className="mr-5">
                <h6 className="h6">{comment.data.name}</h6>
                <div className="caption text-n-1/25">{comment.data.job_title}</div>
            </div>
            <div className="ml-auto">
                <PrismicNextImage 
                    field={comment.data.avatar}
                    className="w-full rounded-full"
                    width={60}
                    height={60}
                />
            </div>
        </div>
    </div>
) 
: (<></>);

export default Comment;
