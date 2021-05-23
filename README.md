## LIVE DEMO :- <a href="https://affectionate-haibt-c64cd3.netlify.app/">Github Popular Repos</a>
In this assignment let's build a **Github Popular Repos**

### Refer to images below:
** -- https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-output.gif -- **
 <br/>
 <div style="text-align: center;">
     <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-output.gif" alt="github-popular-repos-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
 </div>
 <br/>
 
 #### Design Files

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Success](https://assets.ccbp.in/frontend/content/react-js/github-repos-success-sm-ouput.gif)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Loading](https://assets.ccbp.in/frontend/content/react-js/github-repos-sm-loading-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Success](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-success-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Loading](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-loading-output.png)

### Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- When the page is opened initially,

  - _loader_ should be displayed
  - Make HTTP GET request to the following URL
    `https://apis.ccbp.in/popular-repos?language=` with language filter as `ALL`

    Example URL to fetch data with `ALL` filter
    `https://apis.ccbp.in/popular-repos?language=ALL`

  - After fetching the data, the updated repositories list should be displayed

- When a language filter is selected

  - _loader_ should be displayed
  - An HTTP GET request should be made to the above-mentioned URL with the `id`
    of the selected language.
  - After fetching the data, the updated repositories list should be displayed

- The _loader_ should be displayed when
  - The page is opened at initial
  - When a new language filter is clicked
- The default selected language filter is `All`
- The `GithubPopularRepos` component will consist of `languageFiltersData`

  | Key                | Data Type       |
  | ------------------ | --------------- |
  | languageFilterData | Array\<object\> |

- The language filter object will have the following properties

  | Key      | Data Type |
  | -------- | --------- |
  | id       | String    |
  | language | String    |

- The fetched data object will have the following properties

  | Key           | Data Type       |
  | ------------- | --------------- |
  | popular_repos | Array\<object\> |

- Access the list of repositories from the fetched data using the key
  `popular_repos`
- Each repository object will have the following properties

  | Key          | Data Type |
  | ------------ | --------- |
  | id           | String    |
  | avatar_url   | String    |
  | name         | String    |
  | stars_count  | Number    |
  | forks_count  | Number    |
  | issues_count | Number    |

- The `LanguageFilterItem` component should receive the following props

  | Key      | Data Type |
  | -------- | --------- |
  | id       | String    |
  | language | String    |

- Your task is to complete the implementation of
  - `src/components/GithubPopularRepos/index.js`
  - `src/components/GithubPopularRepos/index.css`
  - `src/components/LanguageFilterItem/index.js`
  - `src/components/LanguageFilterItem/index.css`
  - `src/components/RepositoryItem/index.js`
  - `src/components/RepositoryItem/index.css`

### Quick Tip

- To show the animated loader, we need to import the `Loader` component as
  - `import Loader from 'react-loader-spinner'`
- In order to render the given animated loader, use **ThreeDots** for `type`
  attribute & also use **#0284c7** for `color` attribute of `Loader` component
  ```
  <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
  ```

<br/>

> #### Important Note
>
> **The following HTML attributes are required for the HTML button and image
> elements for the tests to pass**
>
> - Wrap the Loader component with an HTML container element and add the
>   `testid` attribute value as `loader` to it
>
>   ```
>   <div testid="loader">
>      <Loader type="Rings" color="#ffffff" height={80} width={80} />
>   </div>
>   ```
>


### Resources

#### Data Fetch URLs

- `https://apis.ccbp.in/popular-repos?language=`

#### Images

- [https://assets.ccbp.in/frontend/react-js/stars-count-img.png](https://assets.ccbp.in/frontend/react-js/stars-count-img.png) - alt text should be **stars**
- [https://assets.ccbp.in/frontend/react-js/forks-count-img.png](https://assets.ccbp.in/frontend/react-js/forks-count-img.png) - alt text should be **forks**
- [https://assets.ccbp.in/frontend/react-js/issues-count-img.png](https://assets.ccbp.in/frontend/react-js/issues-count-img.png) - alt text should be **open-issues**

#### Colors

<div style="background-color: #0284c7; width: 150px; padding: 10px; color: black">Hex: #0284c7</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #f8f8ff; width: 150px; padding: 10px; color: black">Hex: #f8f8ff</div>
<div style="background-color: #e73959; width: 150px; padding: 10px; color: white">Hex: #e73959</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>

#### Font-families

- Roboto
- Lobster


