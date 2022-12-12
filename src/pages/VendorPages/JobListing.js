import React, { useState, useEffect, useCallback } from "react";
import Banner from "../../components/page/Banner";
import GlobalLayout from "../../components/Layout/GlobalLayout";
import TextCheckbox from "../../components/page/TextCheckbox";
import JobPost from "../../components/page/JobPost";
import { axiosInstance } from "../../helpers/axios/axios";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getJobCategories } from "../../helpers/requests/job_requests";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import { routes } from "../../Router/Router";

export default function JobListing() {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [jobCount, setJobCount] = useState(0);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [pagination, setPagination] = useState({ next: null });
  const { jobCategories } = useSelector((state) => state.jobsReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getJobList = useCallback(
    // Function to fetch data from the backend
    async (url, isPagination) => {
      if (isPagination) {
        setPaginationLoading(true);
      } else {
        setLoading(true);
      }
      try {
        const response = await axiosInstance.get(url);
        const fetchedData = response.data;
        const paginationResponse = {
          ...pagination,
          next: fetchedData.next,
        };
        let jobListData;
        if (isPagination) {
          jobListData = jobList.concat(fetchedData.results);
        } else {
          jobListData = fetchedData.results;
        }

        setJobCount(fetchedData.count);
        setJobList(jobListData);
        setPagination(paginationResponse);
        setLoading(false);
        setPaginationLoading(false);
      } catch (error) {
        setLoading(false);
        return console.log(error);
      }
    },
    [jobList, pagination]
  );

  const handleFetchMore = useCallback(() => {
    // handles the fetching of paginated data
    if (pagination.next) {
      getJobList(pagination.next, true);
    }
  }, [pagination, jobList]);

  const getFilterUrl = useCallback(
    // get common url to submit to the server
    (search, categories) => {
      const filterUrl = `jobs/posted-jobs-list/?search=${search}&categories=${categories}`;
      return filterUrl;
    },
    [searchInput, categoryFilter]
  );

  const handleCategorySelectInput = useCallback(
    // handles the updating the select checkboxes state to checked or not checked
    (e) => {
      const categorySelected = e.target.value;
      let categoryFiltersCopy = [...categoryFilter];
      if (categoryFilter.includes(categorySelected)) {
        // if our filter contains the category, we remove it as it means
        // the checkbox is unchecked
        categoryFiltersCopy = categoryFiltersCopy.filter(
          (category) => category !== categorySelected
        );
        setCategoryFilter(categoryFiltersCopy);
      } else {
        categoryFiltersCopy.push(categorySelected);
        setCategoryFilter(categoryFiltersCopy);
      }
    },
    [categoryFilter]
  );

  const handleSearchInput = useCallback((e) => {
    // handle the updation of search state value to the one being typed
    setSearchInput(e.target.value);
  }, []);

  const createUrlFilterParams = useCallback(() => {
    // Function to append search parameters to the url
    // when search input or filter is submitted
    const categories = categoryFilter.toString();
    const options = {
      pathname: routes.jobListing,
      search: `?${createSearchParams({
        search: searchInput,
        categories: categories,
      })}`,
    };
    navigate(options, { replace: true });
  }, [searchInput, categoryFilter]);

  const handleCategoryFilterSubmit = useCallback(() => {
    // handles the submit of categories filter check boxes
    // to the server
    const filterValues = categoryFilter.toString();
    const filterUrl = getFilterUrl(searchInput, filterValues);
    createUrlFilterParams();
    getJobList(filterUrl, false);
  }, [categoryFilter, searchInput]);

  const handleSearchSubmit = useCallback(
    (e) => {
      // handle the submit of search input value to server
      e.preventDefault();
      const categories = categoryFilter.toString();
      const filterUrl = getFilterUrl(searchInput, categories);
      createUrlFilterParams();
      getJobList(filterUrl, false);
    },
    [searchInput, categoryFilter]
  );

  useEffect(() => {
    const searchParam = searchParams.get("search");
    const categoriesParam = searchParams.get("categories");

    if (searchParam) {
      setSearchInput(searchParam);
    }

    // const cleanParamsList = []
    if (categoriesParam) {
      const categoriesParamList = categoriesParam.split(",");
      setCategoryFilter(categoriesParamList);
    }

    const url = getFilterUrl(
      searchParam ? searchParam : "",
      categoriesParam ? categoriesParam : ""
    );
    getJobList(url, false);
    if (jobCategories.length === 0) {
      getJobCategories(dispatch);
    }
  }, []);

  return (
    <GlobalLayout
      authenticated={true}
      user="images/profile.png"
      notification="3"
      name="David"
    >
      <Banner />
      <div className="block lg:flex lg:flex-row-reverse justify-between items-center px-4 lg:px-16 mt-[46px]">
        <form
          className="flex w-full max-w-[400px] px-3  lg:py-4 gap-2 items-center rounded-[100px] bg-[#FBFBFB] border border-[#EBEBEB]"
          onSubmit={handleSearchSubmit}
        >
          <img src="images/search.svg" width={24} height={24} alt="search" />
          <input
            className="outline-none placeholder:text-[#999999] text-base font-semibold"
            placeholder="Search"
            name="search"
            value={searchInput}
            onChange={handleSearchInput}
          />
        </form>
        <span className="block mt-3 text-[#444242] text-xl md:text-2xl font-semibold">
          {loading ? <p>Fetching jobs...</p> : `${jobCount} Jobs Found`}
        </span>
      </div>
      <div className="block lg:flex w-full lg:border-t lg:border-t-[#858585] mt-4 lg:mt-9">
        {/* filter */}
        <div className="block pl-4 pr-4 xl:pl-[57px] xl:pr-[34px] pt-4 lg:pt-9 border-r border-r-[#C7C7C7]">
          <span className="text-black text-2xl font-semibold">
            Find by Category:
          </span>
          <div className="mt-5">
            {jobCategories.length > 0 ? (
              jobCategories.map((category) => (
                <TextCheckbox
                  key={category.id}
                  text={category.name}
                  value={category.id}
                  checked={categoryFilter.includes(`${category.id}`)}
                  handleCategorySelect={handleCategorySelectInput}
                />
              ))
            ) : (
              <p className="p-5">Loading categories...</p>
            )}
            {jobCategories.length > 0 && (
              <Button
                variant="primary"
                size="sm"
                className="mt-2"
                onClick={handleCategoryFilterSubmit}
              >
                Filter
              </Button>
            )}
          </div>
          {/* <div className="mt-12">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-semibold text-black">Sort</span>
              <img src="images/sort.svg" width={30} height={30} alt="sort" />
            </div>
            <button className="text-[#2B2929] text-lg font-semibold mt-[26px]">
              Date Posted
            </button>
          </div> */}
        </div>
        {/* posts */}
        <div className="pt-8 px-8 pb-[130px] grid grid-cols-1 gap-y-8">
          {loading ? (
            <div className="row">
              <div className="col-md-12 col-12">
                <p className="text-center">Loading...</p>
              </div>
            </div>
          ) : jobList.length > 0 ? (
            jobList.map((jobPost) => {
              const {
                id,
                name,
                description,
                created,
                category_info,
                emirate_name_info,
              } = jobPost;

              return (
                <JobPost
                  key={id}
                  headline={name}
                  timePosted={created}
                  id={id}
                  category={
                    category_info?.name ? category_info.name : "No category"
                  }
                  emiratesName={
                    emirate_name_info?.name
                      ? emirate_name_info.name
                      : "No emirate name"
                  }
                  description={description}
                />
              );
            })
          ) : (
            <p className="text-center p-5">No jobs found</p>
          )}
          {!loading && pagination.next && (
            <Button
              variant="warning"
              size="lg"
              disabled={paginationLoading}
              onClick={handleFetchMore}
            >
              {paginationLoading ? "Loading more..." : "View More"}
            </Button>
          )}
        </div>
      </div>
    </GlobalLayout>
  );
}
