import { elements, clearContent, fadeElement } from '../base';

export const renderView = () => {
	const markup = `
		<article id="contact-page">    
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
                    <td class="value">&nbsp;&nbsp;<a href="http://www.facebook.com/shaun.bloom" target="_blank">www.facebook.com/shaunbloom</a></td>    
                </tr>
                <tr>
                    <td class="name">LinkedIn:</td> 
                    <td class="value">&nbsp;&nbsp;<a href="https://www.linkedin.com/in/shaun-bloom-7ab270a9/" target="_blank">www.linkedin.com/shaunbloom</a></td>    
                </tr>
                <tr>
                    <td class="name">Github:</td> 
                    <td class="value">&nbsp;&nbsp;<a href="https://github.com/shaunbloom/" target="_blank">www.github.com/shaunbloom</a></td>    
                </tr>
            </tbody></table>
        </article>
	`;
    fadeElement(elements.homePageContent, 'out');
    setTimeout(function() {
        clearContent(elements.homePageContent);
        elements.homePageContent.insertAdjacentHTML('beforeend', markup);
        fadeElement(elements.homePageContent, 'in');
    }, 1000);
};