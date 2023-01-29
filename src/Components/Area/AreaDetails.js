import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AreaDetails = () => {
    const areas=useLoaderData()
    console.log(areas);

    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum voluptatibus id dignissimos, tempore nulla nemo quasi a fuga, officiis tenetur facere illum sit modi quam impedit eveniet, ipsam quisquam cupiditate. Voluptatibus quo architecto quis neque aliquam perferendis nisi, sint, illo earum consectetur amet quas sequi consequatur culpa fugit commodi illum labore accusamus inventore perspiciatis soluta odio voluptatem magnam fugiat. Eligendi, a officia? Dolore, repudiandae repellendus vitae ducimus ea ipsam libero officiis soluta odio quo, debitis odit doloremque accusamus vel doloribus. Animi consequuntur numquam eaque dolorem vero magnam possimus alias tenetur itaque doloribus. Maiores aliquam dignissimos obcaecati dolor nam, optio assumenda a est voluptate corporis ipsa id fuga impedit sint quas ratione quisquam sed quibusdam, esse accusamus vitae odit exercitationem nobis. Corrupti, in aut pariatur architecto, quisquam sapiente, illum quaerat expedita mollitia nobis eaque nam. Ullam, harum eum asperiores accusamus veritatis numquam quasi optio repellat perspiciatis facilis? Placeat, quae! Quas alias nulla fuga atque deleniti perspiciatis ratione dolorum odit ab debitis, odio error ipsam eum qui eos culpa, officia labore! Beatae sapiente dolor sed vel ducimus laborum totam consequatur expedita eveniet necessitatibus illum aperiam possimus eum eaque est aspernatur facilis perferendis delectus qui neque placeat dicta, enim itaque atque! Dolor quidem, distinctio quasi eveniet ex reiciendis error dolores voluptatem magni repellat accusantium accusamus consequatur tempora! Nesciunt id, aut tempora odio accusamus officia ex delectus hic veritatis dolor? Temporibus accusamus perspiciatis odio ratione excepturi harum dolorem eaque provident, culpa reprehenderit corrupti doloribus, dolor numquam, voluptas voluptatum. Accusamus facere illum itaque aspernatur reprehenderit autem, vero vitae impedit esse tempore cum, dignissimos obcaecati distinctio natus soluta labore eaque officia, fugiat nisi. Voluptatem debitis placeat est saepe cupiditate impedit amet quisquam labore ducimus odio sunt expedita explicabo eum quia, neque laboriosam nam quo adipisci, corrupti reprehenderit itaque voluptates, aliquam at consequuntur! Vitae, sed. Tenetur!</p>
        </div>
    );
};

export default AreaDetails;