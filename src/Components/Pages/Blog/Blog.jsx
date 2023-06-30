import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
    const [loader, setLoader] = useState(false);
    const downloadToPdf = () => {
        const capture = document.getElementById('download_section');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('blog.pdf');
        })
    }
    return (
        <div className='container mx-auto mt-20'>
            <section>
                <p className='text-3xl text-center font-bold mb-10'>Information about React, Node and Express</p>
            </section>
            <section id='download_section'>
                <div className='back'>
                    <section className='first-section'>
                        <div className='section-style'>
                            <h2 className='font-bold text-xl mb-3'>Tell us the differences between uncontrolled and controlled components?</h2>
                            <h4 className='text-xl'>Controlled Component:</h4>
                            <p>The component is under control of the component’s state.</p>
                            <p>These components are predictable as are controlled by the state of the component.</p>
                            <p>Internal state is not maintained.</p>
                            <p>It accepts the current value as props.</p>
                            <p>Does not maintain its internal state.</p>
                            <p>Controlled by the parent component.</p>
                            <p>Have better control on the form data and values.</p>
                            <h4>Uncontrolled Component:</h4>
                            <p>Components are under the control of DOM.</p>
                            <p>Are Uncontrolled because during the life cycle methods the data may loss.</p>
                            <p>Internal state is maintained.</p>
                            <p>We access the values using refs.</p>
                            <p>Maintains its internal state.</p>
                            <p>Controlled by the DOM itself.</p>
                            <p>Has very limited control over form values and data.</p>
                        </div>
                    </section>

                    <section className='first-section'>
                        <div className='section-style'>
                            <h2 className='font-bold text-xl mb-3'>How to validate React props using PropTypes?</h2>
                            <div className='mb-3'> Props are used to passing the read-only attributes to React components. For the proper functioning
                                of components and to avoid future bugs and glitches it is necessary that props are passed correctly.
                                Hence, it is required to use props validation for improving react component’s performance.
                                React JS has an inbuilt feature for validating props data type to make sure that values passed
                                through props are valid. React components have a property called propTypes which is used to setup
                                data type validation.</div>

                            <div><span className='text-xl font-bold mb-3'>
                                Validators: The propTypes object contains a list of validators for basic data types, some of them
                                are: 
                            </span><br />

                                <div>
                                    <li>PropTypes.any: This means the prop can be of any data type.</li>
                                    <li>PropTypes.bool: This means the prop should be a boolean.</li>
                                    <li>PropTypes.number: This means the prop should be a number.</li>
                                    <li>PropTypes.string: This means the prop should be a string.</li>
                                    <li>PropTypes.func: This means the prop should be a function.</li>
                                    <li>PropTypes.array: This means the prop should be an array.</li>
                                    <li>PropTypes.object: This means the prop should be an object.</li>
                                    <li>PropTypes.symbol: This means the prop should be a symbol.</li>
                                    <li>PropTypes.instanceOf: This means the prop should be an instance of a particular JavaScript class.</li>
                                    <li>PropTypes.isRequired: This means the prop should be provided.</li>
                                    <li>PropTypes.oneOf(): This means the props should be one of several types of specified values.</li>
                                    <li>PropTypes.element: This means the props must be an element.</li>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='first-section'>
                        <div className='section-style'>
                            <h2 className='font-bold text-xl mb-3'>Tell us the difference between nodejs and express js?</h2>
                            <table>
                                <tr>
                                    <th>Feature</th>
                                    <th>Express.js</th>
                                    <th>Node.js</th>
                                </tr>
                                <tr>
                                    <td>Usage</td>
                                    <td>It is used to build web-apps using approaches and principles of Node.js.</td>
                                    <td>It is used to build server-side, input-output, event-driven apps.</td>
                                </tr>
                                <tr>
                                    <td>Building Block</td>
                                    <td>It is built on Node.js.</td>
                                    <td>It is built on Google’s V8 engine.</td>
                                </tr>
                                <tr>
                                    <td>Written in</td>
                                    <td>JavaScript</td>
                                    <td>C, C++, JavaScript</td>
                                </tr>
                                <tr>
                                    <td>Framework/Platform</td>
                                    <td>Framework based on Node.js.</td>
                                    <td>Run-time platform or environment designed for server-side execution of JavaScript.</td>
                                </tr>
                                <tr>
                                    <td>Controllers</td>
                                    <td>Controllers are provided.</td>
                                    <td>Controllers are not provided.</td>
                                </tr>
                                <tr>
                                    <td>Routing</td>
                                    <td>Routing is provided.</td>
                                    <td>Routing is not provided.</td>
                                </tr>
                                <tr>
                                    <td>Middleware</td>
                                    <td>Uses middleware for the arrangement of functions systematically server-side.</td>
                                    <td>Doesn’t use such a provision.</td>
                                </tr>
                                <tr>
                                    <td>Coding time</td>
                                    <td>It requires less coding time.</td>
                                    <td>It requires more coding time.</td>
                                </tr>
                            </table>
                        </div>
                    </section>

                    <section className='first-section'>
                        <div className='section-style'>
                            <h2 className='font-bold text-xl mb-3'>What is a custom hook, and why will you create a custom hook?</h2>
                            <p> Custom hooks are a handy way to encapsulate hook-related logic that can be re-used across components when using component composition isn’t really something that will help, make sense, or just look semantically right. Think of a custom hook as a super-powered helper function.</p>
                            <p>With custom React Hooks, we can reuse stateful logic easily across different components in an optimized and scalable format. Custom Hooks also produce a clean and structured codebase that reduces complexity and redundancy in your React project.</p>
                        </div>
                    </section>
                </div>
            </section>
            <section className='flex items-center justify-center'>
                <button onClick={downloadToPdf} disabled={!(loader===false)} className="btn btn-primary">
                    {loader?(
                        <span>Downloading</span>
                        ):(
                        <span>Download as PDF</span>
                    )}
                </button>
            </section>
        </div>
    );
};

export default Blog;