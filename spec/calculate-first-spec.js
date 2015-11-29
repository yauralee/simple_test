describe('single_element_spec', function() {

  var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
  var collection_b = [11, 11, 22, 11, 33, 11];
  var collection_pi = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 1, 4];

  it('第偶数个元素中，选出不重复的元素', function() {
    var result = single_element(collection_a);
    expect(result).toEqual([6, 43, 5]);
  });

  it('第偶数个元素中，选出不重复的元素', function() {
    var result = single_element(collection_b);
    expect(result).toEqual([]);
  });

  it('第偶数个元素中，选出不重复的元素, 我是倒霉蛋挂掉的测试', function() {
    var result = single_element(collection_pi);
    expect(result).toEqual([9, 6, 3, 4]);
  });
});
