// import { useEffect, useState } from "react";
// import { getImageUrl } from "../../aws";

// export function useImageUrl(key: string) {
//   const [url, setUrl] = useState<string | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       const data = getImageUrl(key);
//       setUrl(data);
//     };
//     getData();
//   }, []);

//   return url;
// }

import "../../aws/aws-config";
import S3 from "aws-sdk/clients/s3";
import { useEffect, useState } from "react";

const s3 = new S3();

export function useImageUrl(key: string) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
      Key: key,
      Expires: 60,
    };

    s3.getSignedUrl("getObject", params, (err, url) => {
      if (err) {
        console.log(err);
      } else {
        setUrl(url);
      }
    });
  }, []);

  return url;
}
