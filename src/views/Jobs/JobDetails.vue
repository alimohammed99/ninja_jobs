<template>
    <!-- I need to show the job details based on condition coz "job" was set to null initially. So to avoid errors ("Cannot read properties of null"), let any job show IF it exists. -->
    <div v-if="job">
        <h1>{{ job.title }}</h1>

        <p>{{ job.details }}</p>
    </div>

    <div v-else>
    <p style="font-size:90px; color:tomato">Loading Job details.....</p>
    </div>
</template>

<script>

export default {
    props: ['ic'],
    data() {
        return {
            job: null
        }
    },
    mounted() {
        // Several explanations about fetching and all the below functions can be found in the jobs page ( jobs.vue ).
        // I'm fetching individual job here so I have to specify the job 'id' to know which one...
        // The job id has been represented by "ic" in the router-link in Jobs.vue.
        // I was able to reference the job id using "this" coz it's been sent here as props, so it's now part of here.
        fetch(' http://localhost:3000/jobs/' + this.ic)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    }
} 
</script>

<style></style>
