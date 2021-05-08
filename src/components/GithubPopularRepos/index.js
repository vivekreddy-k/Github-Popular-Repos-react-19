import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiUrl = 'https://apis.ccbp.in/popular-repos?language='

class GithubPopularRepos extends Component {
  state = {
    isLoading: true,
    repositoriesData: [],
    selectedLanguageFilter: 'ALL',
  }

  componentDidMount() {
    this.getRepositories(languageFiltersData[0].id)
  }

  setRepositories = (fetchedData, loadingStatus) => {
    this.setState({
      repositoriesData: fetchedData,
      isLoading: loadingStatus,
    })
  }

  setIsLoading = loadingStatus => {
    this.setState({isLoading: loadingStatus})
  }

  getRepositories = async selectedLanguageFilter => {
    this.setIsLoading(true)
    const response = await fetch(`${apiUrl}${selectedLanguageFilter}`)
    const fetchedData = await response.json()
    const updatedData = fetchedData.popular_repos.map(eachRepository => ({
      id: eachRepository.id,
      imageUrl: eachRepository.avatar_url,
      name: eachRepository.name,
      starsCount: eachRepository.stars_count,
      forksCount: eachRepository.forks_count,
      issuesCount: eachRepository.issues_count,
    }))
    this.setRepositories(updatedData, false)
  }

  renderRepositoriesList = () => {
    const {repositoriesData} = this.state

    return (
      <ul className="repositories-cards-list-container">
        {repositoriesData.map(repositoryData => (
          <RepositoryItem
            key={repositoryData.id}
            repositoryData={repositoryData}
          />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader color="#0284c7" height={80} type="ThreeDots" width={80} />
    </div>
  )

  setSelectedLanguageFilterAndGetRepositories = newFilterId => {
    this.setState({selectedLanguageFilter: newFilterId})
    this.getRepositories(newFilterId)
  }

  renderLanguageFiltersList = () => {
    const {selectedLanguageFilter} = this.state

    return (
      <ul className="filters-list-container">
        {languageFiltersData.map(eachLanguageFilter => (
          <LanguageFilterItem
            isSelected={eachLanguageFilter.id === selectedLanguageFilter}
            key={eachLanguageFilter.id}
            languageFilter={eachLanguageFilter}
            setSelectedLanguageFilterAndGetRepositories={
              this.setSelectedLanguageFilterAndGetRepositories
            }
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="github-popular-repositories-container">
          <h1 className="heading">Popular</h1>
          {this.renderLanguageFiltersList()}
          {isLoading ? this.renderLoader() : this.renderRepositoriesList()}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
