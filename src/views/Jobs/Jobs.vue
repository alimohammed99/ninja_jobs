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
                { title: 'Ninja UI / UX Designer', id: 1, details: 'Design' },
                { title: 'Ninja Web Developer', id: 2, details: 'Programming' },
                { title: 'Ninja Application Developer', id: 3, details: 'Programming' }
            ]
        }
    }
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
