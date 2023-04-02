// SORTING THE JOBS

const jobTypeSelect = document.getElementById('jobType');
const jobListings = document.querySelectorAll('.jobList');
const jobCountSpan = document.querySelector('#jobCount');

jobTypeSelect.addEventListener('change', () => {
  const selectedJobType = jobTypeSelect.value;jobListings.forEach((jobListing) => {
    if (selectedJobType === 'all') {
      jobListing.style.display = 'block';
    } else if 
    (jobListing.classList.contains(selectedJobType))
    {
      jobListing.style.display = 'block';
    } else {
      jobListing.style.display = 'none';
    }
  });
});

// JOB COUNT
const jobList = {
  all: 12, 
  software: 10, 
  design: 2 
};

jobCountSpan.innerText = `${jobList.all} available jobs`; 

jobTypeSelect.addEventListener('change', () => {
  const selectedJobType = jobTypeSelect.value;
  jobCountSpan.innerText = `${jobList[selectedJobType]} available jobs`;
})