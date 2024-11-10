import css from './BadgesList.module.css'
import icons from '../../assets/icons.svg'

export default function BadgesList({ features, iconMap, toUpperCaseFirstLatter }) {
    return (
    <ul className={css.badgesList}>
      {features.map((feature, index) => (
        <li className={css.badgesItem} key={index}>
          <svg className={`${css.icon} ${css[feature.label]}`} height={16} width={16}>
            <use href={`${icons}#${iconMap[feature.label] || ''}`}></use>
          </svg>
          {feature.label === 'Engine' || feature.label === 'Transmission'
            ? toUpperCaseFirstLatter(feature.value)
            : feature.label}
        </li>
      ))}
    </ul>
  );
};