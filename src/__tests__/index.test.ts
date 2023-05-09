import { renderHook } from '@testing-library/react-hooks';
import useModals from '../index';

describe('Tests useModals', () => {
  it('should return all methods by object destructuring', () => {
    const { result } = renderHook(() => useModals());

    const { closeModal, openModal, isOpen, modalRef } = result.current;

    expect(closeModal).toBeDefined();
    expect(openModal).toBeDefined();
    expect(isOpen).toBeDefined();
    expect(modalRef).toBeTruthy();
  });
});
