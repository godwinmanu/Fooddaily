"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "./index.scss";
import imageKitLoader from "@/utils/imageLoader";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  return (
    <div className="article">
      <div className="article-image">
        <Image
          fill={true}
          loader={imageKitLoader}
          src="meat-dish-as-discount-image.jpg"
          alt="meat-dish-as-discount-image"
        />
      </div>
      <div className="about-article">
        <div className="reading-time">
          <Clock size={15} /> 5min read
        </div>
        <div className="post-date">
          <Calendar size={15} /> Posted on February 19, 2024
        </div>
      </div>
      <h1>
        Healthy Meals, Healthy Mind: The Impact of Nutrition on Mental Health
      </h1>

      <p className="hastags">
        <span>#health</span>
        <span>#nutrition</span>
        <span>#wellBeing</span>
        <span>#mentalHealth</span>
        <span>#heathyFood</span>
      </p>

      <p>
        The age-old saying "You are what you eat" takes on its full meaning when
        we explore the correlation between nutrition and mental health. While
        our diet is often associated with physical goals, it is increasingly
        evident that what we put on our plates significantly impacts our mental
        well-being.
      </p>

      <h2>Fuel for the Brain</h2>
      <p>
        Our brain, though small in size, is energy-intensive and requires proper
        nutrition to function at its best. Meals rich in nutrients such as
        omega-3 fatty acids, antioxidants, and B vitamins are not only good for
        the body but also essential for mental health. Fatty fish, nuts, leafy
        green vegetables, and fruits are foods that fuel the brain with crucial
        nutrients.
      </p>

      <h2>Emotional Balance through Nutrition</h2>
      <p>
        The links between diet and emotional disorders, such as anxiety and
        depression, are becoming increasingly apparent. Certain foods can
        influence the production of serotonin, the happiness hormone. Thoughtful
        choices, such as whole grains, vegetables, and lean proteins, can
        contribute to stabilizing mood and reducing the risk of emotional
        disorders.
      </p>

      <h2>Sugar and Stress: A Duo to Avoid</h2>
      <p>
        While sugar may seem like an instant reward for our palate, it can be
        detrimental to our mental health in the long run. Studies suggest that
        high levels of sugar in the diet can contribute to stress and anxiety.
        Opting for natural alternatives, such as fruits, can not only satisfy
        our sweet tooth but also promote better mental health.
      </p>

      <h2>Meal Ritual as Mindful Practice</h2>
      <p>
        Taking the time to savor balanced meals can become an act of
        mindfulness. By slowing down, appreciating each bite, and being aware of
        how food nourishes our bodies, we can establish a deeper connection
        between our diet and our mental well-being.
      </p>

      <h2>Conclusion</h2>
      <h3>Nourish the Body, Soothe the Mind</h3>
      <p>
        In the end, the dietary choices we make play an essential role in how
        our brain functions and influences our mental health. Opting for a
        balanced and mindful diet can be the first step towards a healthier
        mind.
      </p>
    </div>
  );
};

export default Blog;
