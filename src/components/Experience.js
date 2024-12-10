import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { IoBriefcaseSharp } from "react-icons/io5";
import 'react-vertical-timeline-component/style.min.css';
import { Heading } from "@chakra-ui/react";

function Experience() {
    return (
        <>
        <Heading id="experience-section">Professional Experience</Heading>
        <VerticalTimeline lineColor='black'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#f6f6f6', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #f6f6f6' }}
                date="Sept 2020 - Present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoBriefcaseSharp />}
                >
                <h3 className="vertical-timeline-element-title">NLP Research Scientist</h3>
                <h3>Language Weaver</h3>
                <h3>Los Angeles, CA (remote)</h3>
                <p>
                Collaborate with engineering teams to deploy NLP models, applied research on LLMs, build custom data pipelines
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#f6f6f6', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #f6f6f6' }}
                date="Dec 2018 - Sept 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoBriefcaseSharp />}
                >
                <h3 className="vertical-timeline-element-title">Sr. Data Scientist</h3>
                <h3>Qntfy</h3>
                <h3>Arlington, VA (remote)</h3>
                <p>
                Applied machine learning research for defense-sponsored projects, custom analysis of mental health issues expressed via
                social media for NGO clients
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#f6f6f6', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #f6f6f6' }}
                date="May 2017 - Dec 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoBriefcaseSharp />}
                >
                <h3 className="vertical-timeline-element-title">Data & Applied Scientist II</h3>
                <h3>Microsoft</h3>
                <h3>Redmond, WA</h3>
                <p>
                Integrated machine learning models into web-based machine learning service components
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#f6f6f6', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #f6f6f6' }}
                date="June 2016 - May 2017"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoBriefcaseSharp />}
                >
                <h3 className="vertical-timeline-element-title"> Data Scientist II</h3>
                <h3>Paciifc Northwest National Laboratory</h3>
                <h3>Seattle, WA</h3>
                <p>
                Built machine learning models for use cases in natural language processing and computer vision,
                published findings in conference research papers 
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </>
    );
};

export default Experience;