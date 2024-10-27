import Story from "./Story"

export default function Stories(){

    const stories = [
        {imageSrc: '/assets/9gag.svg', username: '9gag'},
        {imageSrc: '/assets/meowed.svg', username: 'meowed'},
        {imageSrc: '/assets/barked.svg', username: 'barked'},
        {imageSrc: '/assets/nathanwpylestrangeplanet.svg', username: 'nathanwpylestrangeplanet'},
        {imageSrc: '/assets/wawawicomics.svg', username: 'wawawicomics'},
        {imageSrc: '/assets/respondeai.svg', username: 'respondeai'},
        {imageSrc: '/assets/filomoderna.svg', username: 'filomoderna'},
        {imageSrc: '/assets/memeriagourmet.svg', username: 'memeriagourmet'}
    ]

    return(
        <div className="stories">
            {stories.map((story, index) => (
                <Story key={index} imageSrc={story.imageSrc} username={story.username} />
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>

        </div>

    )
}