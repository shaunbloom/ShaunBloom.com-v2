import { elements, clearContent } from '../base';

export const renderView = () => {
	const markup = `
		<article id="contact-page" class="dynamic-content contact-content">
            <div class="twinkle"></div>            
            <nav>
                <ul>
                    <li><a id="home-link">Home</a></li>
                </ul>
            </nav>
            <header><h1>Contact Me</h1></header>
            <table>
                <tbody><tr>
                    <td class="name">Email:</td> 
                    <td class="value">&nbsp;&nbsp;S h a u n B l o o m @ gmail . com</td>
                </tr>
                <tr>
                    <td class="name">Address:</td> 
                    <td class="value pad">&nbsp;&nbsp;XXXXX NE 145th pl,<br>&nbsp;&nbsp;Duvall, WA 98019</td>
                </tr>
                <tr>
                    <td class="name">Phone:</td> 
                    <td class="value">&nbsp;&nbsp;Call me and I will tell you.</td>
                </tr>
                <tr>
                    <td class="name">Facebook:</td> 
                    <td class="value">&nbsp;&nbsp;<a href="http://www.facebook.com/shaun.bloom" target="_blank">www.facebook.com/shaun.bloom</a></td>    
                </tr>
                <tr>
                    <td class="name">Github:</td> 
                    <td class="value">&nbsp;&nbsp;<a href="https://github.com/shaunbloom/" target="_blank">https://github.com/shaunbloom/</a></td>    
                </tr>
            </tbody></table>
        </article>
	`;

    clearContent(elements.homePageBackground);
	elements.homePageBackground.insertAdjacentHTML('beforeend', markup);
};