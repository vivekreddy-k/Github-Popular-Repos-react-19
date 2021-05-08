import './index.css'

const LanguageFilterItem = props => {
  const {
    isSelected,
    languageFilter,
    setSelectedLanguageFilterAndGetRepositories,
  } = props
  const btnClassName = isSelected
    ? 'language-btn selected-language-btn'
    : 'language-btn'
  const onClickBtnLanguageFilter = () => {
    setSelectedLanguageFilterAndGetRepositories(languageFilter.id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickBtnLanguageFilter}
        type="button"
      >
        {languageFilter.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
