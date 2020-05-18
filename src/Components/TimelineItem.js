import React from 'react';

const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p className="timeline-title"><div className="timeline-company">{data.title}</div>{data.jobTitle}</p>
            <ul>
                {data.points.map((bullet) =>
                    <li>
                        {bullet}
                    </li>
                )}
            </ul>
            {data.link && (
            <a href={data.link.url} target="_blank" rel="noopener noreferrer">
                {data.link.text}
            </a>
            )}
            <span className="circle"></span>
        </div>
    </div>
);

export default TimelineItem;