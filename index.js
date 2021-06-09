document.title = "JS Task-7 CV"
const body = document.body;

function getHtmlElement(tagName, parent, className) {
    const htmlElement = document.createElement(tagName);
    htmlElement.className = className;
    parent.append(htmlElement);
    return htmlElement;

}

const main = getHtmlElement("main", body, "main_container")
const nav = getHtmlElement("nav", main, "left_column")
const divImgContainer = getHtmlElement("div", nav, "nav-img")
const avatarName = getHtmlElement("div", divImgContainer, "img-name")
avatarName.textContent = "Jane Doe"
const navContent = getHtmlElement("div", nav, "nav_content")
const navDesc = getHtmlElement("div", navContent, "nav_desc")

const navigationIcons = ["fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal",
    "fa fa-home fa-fw w3-margin-right w3-large w3-text-teal",
    "fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal",
    "fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"
]

const navigationTextContent = ['Designer', 'London, UK', 'ex@mail.com', '+37441414141'];

for (let i = 0; i < navigationIcons.length; i++) {
    const descItem = document.createElement("div");
    descItem.className = "desc_item";
    const icon = document.createElement("i");
    icon.className = navigationIcons[i];
    const span = document.createElement("span");
    span.className = "desc_item_name"
    span.textContent = navigationTextContent[i];
    descItem.append(span);
    descItem.prepend(icon);
    navDesc.append(descItem);
};

const mainSkillsContainer = getHtmlElement("div", navContent, "main-skills-container");
const div = getHtmlElement("div", mainSkillsContainer);
const i = getHtmlElement("i", div, "fa fa-asterisk fa-fw w3-margin-right w3-text-teal");
const skillsHeader = getHtmlElement("span", mainSkillsContainer, "skills-header");
skillsHeader.textContent = "Skills";

const profession = ["Adobe Photoshop", "Photography", "Illustrator", "Media"]
const pracent = ['90%', '80%', '75%', '50%']
for (let i = 0; i < profession.length; i++) {
    const percent = document.createElement("div");
    percent.className = "percent";

    const percentValue = document.createElement("span");
    percentValue.style.width = pracent[i]
    percentValue.style.height = '20px';
    percentValue.className = "percent_value";
    percentValue.textContent = pracent[i];

    const p = document.createElement("p");
    p.className = "skill_element_name";
    p.textContent = profession[i];

    percent.append(percentValue);
    mainSkillsContainer.append(p);
    mainSkillsContainer.append(percent);
};

const Languages = ["English", "Spanish", "German"]
const legPercent = ["100%", '50%', '20%']
for (let i = 0; i < Languages.length; i++) {
    const percent = document.createElement("div");
    percent.className = "percent";

    const percentValue = document.createElement("span");
    percentValue.style.width = legPercent[i];
    percentValue.style.height = '30px';
    percentValue.className = "percent_value";

    const p = document.createElement("p");
    p.className = "skill_element_name";
    p.textContent = Languages[i];

    percent.append(percentValue);
    mainSkillsContainer.append(p);
    mainSkillsContainer.append(percent);
};

const workExperience = getHtmlElement('section', main, 'work_experience');
const mainSectionTitleIcon = getHtmlElement('i', workExperience, 'fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal');
mainSectionTitleIcon.id = "icon_style";
const mainSectionTitle = getHtmlElement('h1', workExperience, 'Work Experiance');
mainSectionTitle.textContent = "Work Experience";

const date = ["Jan 2015 ", " Mar 2012 - Dec 2014", " Jun 2010 - Mar 2012"];
const text = ["Lorem ipsum dolor sit amet. Praesentium magnam Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel consectetur vel Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel"
    , "Lorem ipsum dolor sit amet. Praesentium magnam Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel consectetur vel Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel",
    "Lorem ipsum dolor sit amet. Praesentium magnam Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel consectetur vel Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel"];
const titleSectionElement = [
    " Front End Developer",
    " Web Developer / something.com",
    "Graphic Designer / designsomething.com"
];

const iconSectionElement = [
    " fa fa-calendar fa-fw w3-margin-right",
    " fa fa-calendar fa-fw w3-margin-right",
    " fa fa-calendar fa-fw w3-margin-right"
];

for (let i = 0; i <= date.length; i++) {
    const mainSection = document.createElement("div");
    mainSection.className = "main_section";
    const hr = document.createElement("hr");
    const sectionElement = document.createElement("div");
    sectionElement.className = "section_element";
    const h2 = document.createElement("h2");
    h2.className = "section_experience_header";
    h2.textContent = titleSectionElement[i]

    const div = document.createElement("div");

    const icon = document.createElement("i");
    icon.className = iconSectionElement[i];

    const par = document.createElement("p");
    par.className = "section_experience_date";
    par.textContent = date[i];

    const parText = document.createElement("p");
    parText.className = "text";
    parText.textContent = text[i];

    mainSection.append(sectionElement);
    sectionElement.append(h2)
    sectionElement.append(div)
    div.append(icon)
    div.append(par)
    sectionElement.append(parText)
    sectionElement.append(hr)
    workExperience.append(sectionElement)
};

const education = getHtmlElement('section', main, 'education');
const mainEduacationSectionTitleIcon = getHtmlElement('section', education, "fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal");
mainEduacationSectionTitleIcon.id = "icon_style";
const mainSectionTitles = getHtmlElement('h1', education, 'educat');
mainSectionTitles.textContent = "Education";

const educations = ["W3Schools.com", "London Business School", "School of Coding"]
const educationsDate = ["Forever", "  2013 - 2015", '2010 - 2013']
const educationsProf = ["Web Development! All I need to know in one place", 'Bachelor Degree', 'Bachelor Degree']

for (let i = 0; i <= educations.length; i++) {
    const mainSection = document.createElement("div");
    mainSection.className = "main_section";
    const sectionElement = document.createElement("div");
    sectionElement.className = "section_element";
    const h2 = document.createElement("h2");
    h2.className = "section_experience_header";
    h2.textContent = educations[i]

    const div = document.createElement("div");

    const icon = document.createElement("i");
    icon.className = iconSectionElement[i]

    const par = document.createElement("p");
    par.className = "section_experience_date";
    par.textContent = educationsDate[i];

    const parText = document.createElement("p");
    parText.className = "text";
    parText.textContent = educationsProf[i];

    mainSection.append(sectionElement);
    sectionElement.append(h2)
    sectionElement.append(div)
    div.append(icon)
    div.append(par)
    sectionElement.append(parText)
    education.append(sectionElement)
};

const footer = getHtmlElement('footer', main, 'footer');
const footerContainer = document.createElement('div');
footerContainer.className = "footer_container"
const smallFooter = document.createElement('small');
smallFooter.textContent = "Find me on social media"
footerContainer.append(smallFooter)


const footerIcons = ['fa fa-facebook-official w3-hover-opacity', 'fa fa-instagram w3-hover-opacity',
    'fa fa-snapchat w3-hover-opacity', 'fa fa-pinterest-p w3-hover-opacity',
    'fa fa-twitter w3-hover-opacity', 'fa fa-linkedin w3-hover-opacity'
];

for (let i = 0; i < footerIcons.length; i++) {
    const icon = document.createElement("i");
    icon.className = footerIcons[i]
    icon.id = "icon_style";
    icon.style.padding = "5px"
    footerContainer.append(icon)
    footer.append(footerContainer)
};

const footerPar = document.createElement("p");
footerPar.textContent = "Powered by"
const footerA = document.createElement("a");
footerA.textContent = "w3.css"
footerPar.append(footerA)
footerContainer.append(footerPar)

