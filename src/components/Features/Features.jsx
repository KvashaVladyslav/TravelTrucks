import BadgesList from "../BadgesList/BadgesList";
import css from './Features.module.css'

export default function Features({truck: {
        form,
        length,
        width,
        height,
        tank,
        consumption,
        AC,
        bathroom,
        kitchen,
        TV,
        radio,
        refrigerator,
        microwave,
        gas,
        water,
        transmission,
        engine}}) {

    const trueFeatures = [
    { label: 'Transmission', value: transmission },
    { label: 'Engine', value: engine },
    { label: 'AC', value: AC },
    { label: 'Bathroom', value: bathroom },
    { label: 'Kitchen', value: kitchen },
    { label: 'TV', value: TV },
    { label: 'Radio', value: radio },
    { label: 'Refrigerator', value: refrigerator },
    { label: 'Microwave', value: microwave },
    { label: 'Gas', value: gas },
    { label: 'Water', value: water },
  ];

  const trueFeaturesList = trueFeatures.filter((feature) => feature.value);

  const iconMap = {
    AC: 'icon-wind',
    Bathroom: 'icon-shower',
    Kitchen: 'icon-cup',
    TV: 'icon-tv',
    Radio: 'icon-radio',
    Refrigerator: 'icon-fridge',
    Microwave: 'icon-microwave',
    Gas: 'icon-gas',
    Water: 'icon-water',
    Transmission: 'icon-diagram',
    Engine: 'icon-petrol',
    };

    
    
    const toUpperCaseFirstLatter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
    };
    
    return (
        <div className={css.wrapper}>
            <div>
                <BadgesList
                features={trueFeaturesList}
                iconMap={iconMap}
                toUpperCaseFirstLatter={toUpperCaseFirstLatter}
                />
            </div>
            <div className={css.infoWrapper}>
                <h2 className={css.title}>Vehicle details</h2>
                <span className={css.line}></span>
                <div className={css.listsWrapper}>
                    <ul className={css.list}>
                        <li>Form</li>
                        <li>Length</li>
                        <li>Width</li>
                        <li>Height</li>
                        <li>Tank</li>
                        <li>Consumption</li>
                    </ul>
                    <ul className={css.list}>
                        <li className={css.firstLetter}>{form}</li>
                        <li>{length}</li>
                        <li>{width}</li>
                        <li>{height}</li>
                        <li>{tank}</li>
                        <li>{consumption}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}