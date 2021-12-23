
type TechTitle        = string;
type TechItem         = {title:string, href: string} | string;
export type TechList  = TechItem[];
type TechEntry        = [TechTitle, TechList];


export default function useTechnologiesList(): TechEntry[] {
    return [
        ['Front-end Languages:', ['HTML', 'CSS', 'JavaScript']],
        ['Front-end Frameworks:', [{title: 'ReactJS', href: 'https://reactjs.org/'}, 'Angular', 'jQuery']],
        ['CSS Pre-processors:', ['SASS']],
        ['Back-end Languages:', ['PHP']],
        ['IDE:', ['Visual Studio Code (preferred)', 'NetBeans']],
        ['Version Control:', ['Git', 'GitHub']]
    ] 
}