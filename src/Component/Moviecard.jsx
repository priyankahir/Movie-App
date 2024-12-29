const Moviecard = ({ detail }) => {
    return (
        <>
            {!detail ? "" : detail.map((curmovie) => {
                return (
                    <div className="moviecard" key={curmovie.imdbID}>
                        <img src={curmovie.Poster} alt="" />
                        <p id="moviename">{curmovie.Title}</p>
                    </div>
                );
            })}
        </>
    );
};

export default Moviecard;
