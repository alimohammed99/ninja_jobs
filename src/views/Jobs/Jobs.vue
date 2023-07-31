<template>
    <h1 style="color:grey; text-decoration:">JOBS</h1>
    <div class="job" v-for="job in jobs" :key="job.id">
        <!-- For loops in VUE must have a key attribute, and it must be unique for each item. That's why I picked the id. ID is unique. -->
        <router-link :to="{ name: 'JobDetails', params: { ic: job.id } }">
            <!-- I binded this one coz I wanna bind to an object. -->
            <!-- JobDetails is the page (name of the route) I wanna go when any of the Job title is clicked. -->
            <!-- And I have to send in the ID too (parameter), so it's gonna know which of the jobs did User click. -->
            <h2> {{ job.title }} </h2>
        </router-link>
        <!-- The Jobs are surrounded with <router-link> coz I want each Job title to link to the appropriate places, which is the Jobs details page I created.  -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            jobs: [
                // The below data were commented out coz I decided to store all the data inside a json file instead of having them here. The data can be found in data/db.json. But I have to keep the 'jobs' as an empty array here coz I'm cycling through 'jobs' in this component.

                // { title: 'Ninja UI / UX Designer', id: 1, details: 'Design' },
                // { title: 'Ninja Web Developer', id: 2, details: 'Programming' },
                // { title: 'Ninja Application Developer', id: 3, details: 'Programming' }

                // Since I want to get the data from another place (json file) and use it here, the best place/time to enable/get it is inside the mounted() lifecycle. That's why when the component has been mounted to the DOM. 
            ]
        }
    },
    mounted() {
        // I used Fetch API. I need to pass in the endpoint which was provided by the json server to get all the jobs. Now this is gonna fetch all the data for me and return them in json format.
        // The below function is asynchronous and therefore returns a Promise.
        fetch(' http://localhost:3000/jobs')

            // The below function fires a callback function after the above function is done.
            // The below is necessary in order to actually get that data and pass into Javascript, I need to take Response.
            // This is asynchronous and therefore also returns a Promise.
            .then(res => res.json())

            // This is just to populate whatever data in the 'jobs' array inside "data".
            .then(data => this.jobs = data)

            // This is needed incase there's any error with the asynchronous tasks up there.
            .catch(err => console.log(err.message))
    }
    // The then() method in JavaScript has been defined in the Promise API and is used to deal with asynchronous tasks such as an API call.
} 
</script>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 20px;
    margin: 20px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.job h2:hover {
    background: #ddd;
}

.job a {
    text-decoration: none;
}
</style>
