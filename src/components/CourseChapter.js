import { useState } from "react";
import './CourseChapter.css'
import CodeBlocks from "./CodeBlocks";
const CourseChapter =() =>{
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
  };
  const code1 = 'print "Hello World";'
  const code2='printf("%s", "Hello World");'
  const language='Perl'
    return (
        <div className="coursechapter-container">
            <div className="container-1">
                <h1>Hello World</h1>
                <p>This lesson gets you acquanited with the hello world program in peral</p>
                <div className="cover-following">
                    <h2 onClick={()=>handleToggle()}> {isOpen ? '▼' : '▶'}We'll cover the following </h2>
                    {isOpen && 
                    <div>
                        <ul>
                            <li>Why Hello World</li>
                            <li>Syntax</li>
                        </ul>
                        </div>}

                </div>
            </div>
            <div>
                <h1>Syntax</h1>
                <p>Try Running the code below</p>
                <div>
                    <CodeBlocks code={code1} language={language} />
                </div>
                <p>
                    In the above example, we have used the print keyword to display the text Hello world on the screen. 
                    Programmers familiar with the C programming language will be happy to know that the C printf() function also works in Perl. 
                    So, the syntax would look like:
                </p>
                <CodeBlocks code={code2} language={language} />
                <p>
                    In the above code, printf is used to display the text. 
                    The %s is used as a format specifier to let the command know that a string will be printed (which in this case is “Hello World”).
                </p>
            </div>
            <div>
                <h1>Key takeaways</h1>
                <ul>
                    <li>print or printf keyword is used to display text</li>
                    <li>Any text that we want to print goes in pair of double quotes " "</li>
                    <li>Every statement in Perl ends at ; unless it is the final statement in a block, in which case the semicolon is optional</li>
                </ul>
            </div>


        </div>
    )
}
export default CourseChapter