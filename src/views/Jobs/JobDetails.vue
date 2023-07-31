<template>
    <h1 style="color:grey; text-decoration:">JOBS DETAILS</h1>
    <p>The Job ID is {{ ic }}</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique quo ipsum a blanditiis, et sit sequi
        provident placeat, natus laborum, vitae minima. Nesciunt ab sunt officia, dicta alias saepe, incidunt eum ipsam
        quidem nulla voluptas temporibus quis molestiae consequatur ea dolore quod excepturi tenetur debitis porro minus
        doloribus consequuntur omnis. Repudiandae corrupti voluptas in amet dolorem soluta, cum debitis mollitia hic
        repellendus voluptates perferendis perspiciatis libero! Itaque ullam veniam necessitatibus at blanditiis earum,
        numquam dolor, natus in accusamus praesentium veritatis minus id, aperiam fuga iure optio? Modi voluptatem sequi ex
        omnis voluptas, non velit officia ipsam repudiandae eveniet illo. Possimus, asperiores labore excepturi aspernatur
        dicta vitae nam voluptatem at itaque, a numquam reiciendis, impedit officiis exercitationem reprehenderit
        recusandae! Neque totam, laudantium inventore explicabo nesciunt consectetur suscipit iste beatae ab dicta quos
        aliquam molestiae ea adipisci amet! Dolorem sunt facilis dignissimos possimus suscipit obcaecati laboriosam tenetur
        fugit ipsa, accusantium sed iusto blanditiis doloribus temporibus cum consequatur recusandae perspiciatis
        repudiandae aspernatur quos perferendis officia at veritatis qui.</p>
</template>

<script>

export default {
    props: ['ic'],
    mounted() {
        // Several explanations about fetching and all the below functions can be found in the jobs page ( jobs.vue ).
        // I'm fetching individual job here so I have to specify the job id to know which one...
        fetch(' http://localhost:3000/jobs/' + this.ic)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    }
} 
</script>

<style></style>
