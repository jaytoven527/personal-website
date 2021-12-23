import './styles/Tech.scss'
import useTechnologiesList, {TechList} from './hooks/useTechnologiesList';

type ITechListItem = {title: string, techList: TechList};

function TechListItem({title, techList}: ITechListItem) {
    return (
        <li key={title} className="technology">
            <strong>{title}</strong>
            <div className="techList">
                {/* {techList.join(', ')} */}
                {techList.map(techName => {
                    switch (typeof techName) {
                        case 'string':
                            return <div key={techName}>{techName}</div>
                        case 'object':
                            return <div key={techName.title}><a href={techName.href}>{techName.title}</a></div>
                    }
                })}
            </div>
        </li>
    )
}

function TechList() {
    const technologies = useTechnologiesList();

    if (!technologies.length) {
        return null;
    }

    return (
        <ul className="experience">
            {
                technologies.map(([title, techList]) => {
                    return (
                        <TechListItem 
                            key={title} 
                            title={title} 
                            techList={techList}
                        />
                    )
                })
            }
        </ul>
    )
}

export function Tech () {
    return (
        <div className="app">
            <section>
                <header>
                    <h1>Technologies I Know</h1>
                </header>
                <TechList/>
            </section>
        </div>
    );

}



