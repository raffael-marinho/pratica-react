function Profile() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}

function Gallery() {
    return (
        <div>
            <h1>Galeria de cientistas</h1>
            <Profile />
            <Profile />
            <Profile />
        </div>
    )
}

export default function MyComponent() {
    return (
        <div>
            <h1>
                meu component react
            </h1>
            <Gallery />
        </div>
    )
}