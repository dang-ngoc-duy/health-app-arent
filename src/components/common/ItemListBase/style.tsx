import { styled } from "styled-components";

export const StyledItemListPhoto = styled.div`
  position: relative;
  width: 234px;
  height: 234px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  span {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 120px;
    height: 32px;
    background-color: var(--primary-300);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.15px;
  }
`;

export const StyledItemListColumn = styled.div`
  width: 234px;

  .image-block {
    position: relative;
    width: 234px;
    height: 144.47px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .describe-block {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-block-start: 8px;
    margin-block-end: 8px;

    color: var(--dark-500-text);
    font-family: Hiragino Kaku Gothic Pro;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0.075px;
  }

  .hash-tag-block {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    a {
      color: var(--primary-400) !important;
      font-family: Hiragino Kaku Gothic Pro;
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 22px;
      letter-spacing: 0.06px;
    }
  }

  .flag {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 9rem;
    height: 1.5rem;
    background-color: var(--primary-300);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: #fff;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem;
  }
`;

export const StyledItemListDiary = styled.div`
  width: 14.4375rem;
  height: 14.4375rem;
  border: 0.125rem solid #707070;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date-time-block {
    display: flex;
    flex-direction: column;
    width: 9.1875rem;
    height: 3rem;

    color: #414141;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: 0.00563rem;
  }

  .content-block {
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: var(--dark-500-text);
    font-family: Hiragino Kaku Gothic Pro;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.0625rem;
    letter-spacing: 0.00375rem;
  }
`;
