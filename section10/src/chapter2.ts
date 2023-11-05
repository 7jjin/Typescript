/**
 * Pick<T,K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "엣날 컨텐츠",
};

/**
 * Omit<T,K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K,V>
 * -> 동일한 타입의 프로퍼티들을 쉽게 생성할 수 있다.
 */

type TunmbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string; size: number }>;
