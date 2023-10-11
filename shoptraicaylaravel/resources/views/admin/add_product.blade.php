@extends('admin_layout')
@section('admin_content')
<div class="row">
            <div class="col-lg-12">
                    <section class="panel">
                        <header class="panel-heading">
                            Thêm sản phẩm mới
                        </header>
                        <div class="panel-body">
                        <?php
                        $message = Session::get('message');
                        if($message){
                            echo '<span class="text-alert">',$message,'</span>';
                            Session::put('message', null);
                        }
                        ?>

                            <div class="position-center">
                                <form role="form" action="{{URL('/save-product')}}" method="post" enctype="multipart/form-data">
                                    {{csrf_field()}}
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Tên sản phẩm</label>
                                    <input type="text" name="product_name" class="form-control" id="exampleInputEmail1" placeholder="Tên danh mục">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Mô tả chi tiết</label>
                                    <textarea style="resize: none" rows="5" class="form-control" name="product_desc" id="exampleInputPassword1" placeholder="Mô tả chi tiết"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Ghi chú</label>
                                    <textarea style="resize: none" rows="1" class="form-control" name="product_content" id="exampleInputPassword1" placeholder="ghi chú"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Giá Tiền</label>
                                    <input type="text" name="product_price" class="form-control" id="exampleInputEmail1" >
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Hình ảnh</label>
                                    <input type="file" name="product_image" class="form-control" id="exampleInputEmail1">
                                </div>
                                <div class="form-group">
                                <label for="exampleInputPassword1">Danh mục sản phẩm</label>
                                    <select name="product_cate" class="form-control input-sm m-bot15">
                                    @foreach($cate_product as $key => $cate)
                                        <option value="{{$cate->category_id}}">{{$cate->category_name}}</option>
                                    @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                <label for="exampleInputPassword1">Thương Hiệu</label>
                                    <select name="product_brand" class="form-control input-sm m-bot15">
                                    @foreach($brand_product as $key => $brand)
                                        <option value="{{$brand->brand_id}}">{{$brand->brand_name}}</option>
                                    @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                <label for="exampleInputPassword1">Hiển thị</label>
                                    <select name="product_status" class="form-control input-sm m-bot15">
                                        <option value="0">Ẩn</option>
                                        <option value="1">Hiện</option>
                                    </select>
                                </div>
                                
                                
                                <button type="submit" name="add_product" class="btn btn-info">Thêm sản phẩm</button>
                            </form>
                            </div>

                        </div>
                    </section>

            </div>
@endsection