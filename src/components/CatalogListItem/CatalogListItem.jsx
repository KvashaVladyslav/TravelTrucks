export default function CatalogListItem({ item: { name, price, rating, location, description, form, length, width, height, tank, consumption, transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water, gallery, reviews } }) {
    
   
    const thumbImg = gallery && gallery.length > 0 ? gallery[0].thumb : ''; 

    return (
        <div>
            <div>
                {thumbImg && <img src={thumbImg} alt={name} />}
                <div>
                    <div>
                        <div>
                            <h2>{name}</h2>
                            <p>{price}</p>
                        </div>
                        <div>
                            <p>{rating}</p>
                            <p>{location}</p>
                        </div>
                    </div>
                    <p>{description}</p>
                    <div>  
                    </div>
                    <button>Show more</button>
                </div>
            </div>
        </div>
    );
}
